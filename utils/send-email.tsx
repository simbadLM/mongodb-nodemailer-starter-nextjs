'use client'
import { FormData } from '@/app/components/contact/page';

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';
  let status  = 500;
  await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      
    status = response.status;
    })
    .catch((err) => {
      console.log("error");
    });
     return status;
}