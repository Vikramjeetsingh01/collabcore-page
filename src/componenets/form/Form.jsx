import React from 'react'

export default function Form() {
  return (
    <form>
    <div className="form_row">
        <input type="email" placeholder="Email address" />
        <button type="submit" className="Cta">
            Try it free
            <span>
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7.61377H17M17 7.61377L11 1.61377M17 7.61377L11 13.6138" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
        </button>
    </div>
</form>
  )
}


