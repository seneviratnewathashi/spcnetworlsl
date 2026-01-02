import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      organizationName, 
      contactPerson, 
      email, 
      phone, 
      website, 
      organizationType, 
      partnershipType, 
      areasOfInterest, 
      description, 
      expectedOutcome 
    } = body

    // Validate required fields
    if (!organizationName || !contactPerson || !email || !phone || !organizationType || 
        !partnershipType || !areasOfInterest || !description || !expectedOutcome) {
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
        <h2 style="color: #f59e0b;">New Partnership Proposal</h2>
        
        <h3 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">Organization Information</h3>
        <p><strong>Organization Name:</strong> ${organizationName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <p><strong>Organization Type:</strong> ${organizationType}</p>
        
        <h3 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 8px; margin-top: 24px;">Partnership Details</h3>
        <p><strong>Partnership Type:</strong> ${partnershipType}</p>
        <p><strong>Areas of Interest:</strong> ${areasOfInterest}</p>
        
        <h3 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 8px; margin-top: 24px;">Organization Description</h3>
        <p style="white-space: pre-wrap;">${description}</p>
        
        <h3 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 8px; margin-top: 24px;">Expected Outcomes</h3>
        <p style="white-space: pre-wrap;">${expectedOutcome}</p>
        
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">This partnership proposal was submitted through the SPC Network website.</p>
      </div>
    `

    const { data, error: resendError } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: emailTo,
      subject: `New Partnership Proposal - ${organizationName}`,
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
        message: 'Your partnership proposal has been submitted successfully! We will review it and contact you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing partnership proposal:', error)
    
    // Provide more detailed error message in development
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Detailed error:', errorMessage)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error submitting your proposal. Please try again later or contact us directly.' 
      },
      { status: 500 }
    )
  }
}
