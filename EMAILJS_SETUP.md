# EmailJS Setup Verification Checklist

## ✅ Environment Variables
Your `.env` file has been created with:
- ✓ `VITE_EMAILJS_SERVICE_ID=service_zw01gbe`
- ✓ `VITE_EMAILJS_TEMPLATE_ID=template_ebolbml`
- ✓ `VITE_EMAILJS_PUBLIC_KEY=L5tahkPpa6Kdxg2FB`
- ✓ `VITE_OWNER_EMAIL=perfectcoachings0@gmail.com`

⚠️ **IMPORTANT**: Restart your dev server after creating `.env` so environment variables load.

## ✅ EmailJS Template Variables
In your EmailJS dashboard, verify your email template (`template_ebolbml`) includes these **exact** template variables:

```
{{student_name}}
{{phone_number}}
{{class_name}}
{{subject_interest}}
{{message}}
{{owner_email}}
{{submitted_at}}
```

❌ **Common Issue**: If your template uses different variable names (e.g., `{{name}}` instead of `{{student_name}}`), the API will return a 400 error.

### Example EmailJS Template Body:
```html
<h2>New Enquiry from Perfect Coaching Classes</h2>
<p><strong>Student Name:</strong> {{student_name}}</p>
<p><strong>Phone:</strong> {{phone_number}}</p>
<p><strong>Class:</strong> {{class_name}}</p>
<p><strong>Subject of Interest:</strong> {{subject_interest}}</p>
<p><strong>Message:</strong> {{message}}</p>
<p><strong>Submitted At:</strong> {{submitted_at}}</p>
```

## ✅ Debugging Steps

1. **Restart dev server** after creating/updating `.env`:
   ```bash
   npm run dev
   ```

2. **Open browser DevTools** (F12 → Console tab).

3. **Fill and submit the form** on Contact page.

4. **Check console logs** for:
   - `📧 EmailJS Request Payload:` — shows what data is being sent
   - `❌ EmailJS Error Response:` — shows the exact error from EmailJS API

5. **Common 400 Errors**:
   - `"Missing required field"` → Template variable names don't match
   - `"Invalid service_id"` → Service ID is wrong or doesn't exist
   - `"Invalid template_id"` → Template ID is wrong

## ✅ Manual Test

If you want to test the EmailJS API directly before using the form:

```bash
curl -X POST "https://api.emailjs.com/api/v1.0/email/send" \
  -H "Content-Type: application/json" \
  -d '{
    "service_id": "service_zw01gbe",
    "template_id": "template_ebolbml",
    "user_id": "L5tahkPpa6Kdxg2FB",
    "template_params": {
      "student_name": "Test Student",
      "phone_number": "9876543210",
      "class_name": "12th",
      "subject_interest": "Accounts",
      "message": "Test message",
      "owner_email": "perfectcoachings0@gmail.com",
      "submitted_at": "01 Apr 2026, 7:30 PM"
    }
  }'
```

If this works, the form will work too.
