
# Perfect Coaching Classes Website

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## EmailJS Setup For Enquiry Form

The enquiry form on the Contact page sends an email through EmailJS.

1. Create an EmailJS account and connect your Gmail inbox.
2. Create an Email Service and copy the Service ID.
3. Create an Email Template and include these template variables:
   - `student_name`
   - `phone_number`
   - `class_name`
   - `subject_interest`
   - `message`
   - `owner_email`
   - `submitted_at`
4. Copy `.env.example` to `.env` and fill your keys:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_OWNER_EMAIL`
5. Restart the dev server after updating `.env`.

If any variable is missing, form submission will show a configuration error message.
  