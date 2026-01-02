import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please fill in all required fields.' 
        },
        { status: 400 }
      )
    }

    // Initialize Resend with API key
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service is not configured. Please contact the administrator.' 
        },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    
    // Validate EMAIL_TO
    const emailTo = process.env.EMAIL_TO
    if (!emailTo) {
      console.error('EMAIL_TO is not configured')
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email recipient is not configured. Please contact the administrator.' 
        },
        { status: 500 }
      )
    }

    // Send email using Resend
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">New Contact Form Message</h2>
        
        <h3 style="color: #333; border-bottom: 2px solid #10b981; padding-bottom: 8px;">Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        
        <h3 style="color: #333; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-top: 24px;">Message</h3>
        <p style="white-space: pre-wrap;">${message}</p>
        
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">This message was submitted through the SPC Network contact form.</p>
      </div>
    `

    const { data, error: resendError } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: emailTo,
      subject: `Contact Form: ${subject}`,
      html: emailHtml,
      replyTo: email,
    })

    if (resendError) {
      console.error('Resend API error:', resendError)
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email. Please try again or contact us directly.' 
        },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully! We will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    
    // Provide more detailed error message in development
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Detailed error:', errorMessage)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error sending your message. Please try again later or contact us directly.' 
      },
      { status: 500 }
    )
  }
}
