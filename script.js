// Sustituye estos dos valores por los de tu proyecto de Supabase
// (Project Settings -> API). Usa SOLO la clave pública (publishable / anon).
// NUNCA pongas aquí la secret key ni la service_role.
const SUPABASE_URL = "https://zsdqxoupesskzrndmjcy.supabase.co";
const SUPABASE_KEY = "sb_publishable_n6P5iGlO-MA2ZfrnJDmf3g_0-2gVbIb";

const form = document.getElementById("form");
const status = document.getElementById("status");
const button = form.querySelector("button[type='submit']");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const body = {
    email: data.get("email").trim(),
    mensaje: data.get("mensaje").trim(),
  };

  button.disabled = true;
  status.textContent = "Enviando...";

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/mensajes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    status.textContent = "¡Gracias! Tu mensaje fue enviado.";
    form.reset();
  } catch (err) {
    console.error(err);
    status.textContent = "No se pudo enviar. Inténtalo de nuevo.";
  } finally {
    button.disabled = false;
  }
});
