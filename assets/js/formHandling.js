const submitForm = async (name, email, subject, message) => {
  fetch("https://formsubmit.co/ajax/0608572af44fdc8ec0fba1f58f12adfc", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({ name, email, subject, message })
  });
}

export const formHandling = {
  submitForm
}