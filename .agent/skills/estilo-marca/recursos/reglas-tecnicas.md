# Reglas Técnicas de Desarrollo

## 🏗️ Stack Recomendado
Salvo requerimiento explícito del cliente, usar:
- **Frontend**: HTML5 Semántico + CSS Moderno (Variables, Flex/Grid) o Tailwind (v3+).
- **JS**: Vanilla JS para interacciones ligeras. React/Vue solo si hay gestión de estado compleja.
- **Build**: Vite (rápido, ligero).

## 🚫 Restricciones (Anti-patrones técnicos)
1. **No mezclar frameworks CSS**: Elegir uno (Tailwind o CSS Modules o Vanilla) y mantenerlo.
2. **No usar jQuery**: Es innecesario en 2026.
3. **No hardcodear textos**: Usar variables o archivos de config si es posible.
4. **Performance**:
   - Imágenes siempre optimizadas (WebP).
   - Scripts diferidos (`defer`).
   - CSS crítico inline si es bloqueante.

## 🔒 Seguridad
- Sanitizar inputs siempre.
- No exponer API keys en el frontend.
- Usar HTTPS en todos los enlaces.
