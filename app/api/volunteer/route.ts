import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, location, availability, interests, experience, motivation } = body

    
    // Send email using Resend
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">New Volunteer Application</h2>
        
        <h3 style="color: #333; border-bottom: 2px solid #10b981; padding-bottom: 8px;">Personal Information</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        
        <h3 style="color: #333; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-top: 24px;">Volunteer Details</h3>
        <p><strong>Availability:</strong> ${availability}</p>
        <p><strong>Areas of Interest:</strong> ${interests}</p>
        
        <h3 style="color: #333; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-top: 24px;">Experience</h3>
        <p style="white-space: pre-wrap;">${experience || 'Not provided'}</p>
        
        <h3 style="color: #333; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-top: 24px;">Motivation</h3>
        <p style="white-space: pre-wrap;">${motivation}</p>
        
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">This application was submitted through the SPC Network website.</p>
      </div>
    `

    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.EMAIL_TO || 'your-email@example.com',
      subject: `New Volunteer Application - ${fullName}`,
      html: emailHtml,
      replyTo: email,
    })

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your volunteer application has been submitted successfully! We will contact you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing volunteer application:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error submitting your application. Please try again.' 
      },
      { status: 500 }
    )
  }
} 

