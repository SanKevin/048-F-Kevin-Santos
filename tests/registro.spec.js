const { test, expect } = require('@playwright/test');

test('Registro en Buggy Cars Rating', async ({ page }) => {
  // 1) Ir al sitio
  await page.goto('https://buggy.justtestit.org/');

  // 2) Click en botón Register (arriba a la derecha)
  await page.getByRole('link', { name: 'Register' }).click();

  // 3) Llenar formulario
  const username = 'user' + Date.now();   // evita duplicados

  await page.fill('#username', username);
  await page.fill('#firstName', 'Kevin');
  await page.fill('#lastName', 'Santos');
  await page.fill('#password', 'Kensa@17a');
  await page.fill('#confirmPassword', 'Kensa@17a');

  // 4) Asegurar que el botón esté visible
  await page.getByRole('button', { name: 'Register' }).scrollIntoViewIfNeeded();

  // 5) Click en Register
  await page.getByRole('button', { name: 'Register' }).click();

  // 6) Verificar el mensaje de éxito
  const successMessage = page.locator('.result');
  await expect(successMessage).toHaveText('Registration is successful');

  // 7) Iniciar sesión
  await page.fill('input[name="login"]', username);
  await page.fill('input[name="password"]', 'Kensa@17a');
  await page.getByRole('button', { name: 'Login' }).click();

  // 8) Validar que el login fue exitoso
  await expect(page.getByText(`Hi, ${username}`)).toBeVisible();
});
