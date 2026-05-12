export const submitForm = async (name, email, subject, message) => {
  try {
    const url = `https://formsubmit.co/ajax/${process.env.FORMSUBMIT_KEY}`;
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
  } catch (err) {
    console.info("An error has happened during the form submission.");
    console.error(err.message);
  }
};
