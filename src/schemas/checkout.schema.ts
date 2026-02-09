import { z } from 'zod';

/**
 * Checkout Form Validation Schema
 * Validates customer information during checkout process
 */
export const checkoutSchema = z.object({
    // Contact Information
    email: z
        .string()
        .min(1, 'El email es requerido')
        .email('Email inválido')
        .toLowerCase()
        .trim(),

    // Personal Information
    firstName: z
        .string()
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(50, 'El nombre no puede exceder 50 caracteres')
        .trim(),

    lastName: z
        .string()
        .min(2, 'El apellido debe tener al menos 2 caracteres')
        .max(50, 'El apellido no puede exceder 50 caracteres')
        .trim(),

    phone: z
        .string()
        .min(10, 'El teléfono debe tener al menos 10 dígitos')
        .max(15, 'El teléfono no puede exceder 15 dígitos')
        .regex(/^[0-9+\-\s()]+$/, 'Teléfono inválido')
        .trim(),

    // Shipping Address
    address: z
        .string()
        .min(10, 'La dirección debe tener al menos 10 caracteres')
        .max(200, 'La dirección no puede exceder 200 caracteres')
        .trim(),

    city: z
        .string()
        .min(2, 'La ciudad debe tener al menos 2 caracteres')
        .max(100, 'La ciudad no puede exceder 100 caracteres')
        .trim(),

    province: z
        .string()
        .min(2, 'La provincia es requerida')
        .max(100, 'La provincia no puede exceder 100 caracteres')
        .trim(),

    postalCode: z
        .string()
        .min(4, 'El código postal debe tener al menos 4 caracteres')
        .max(10, 'El código postal no puede exceder 10 caracteres')
        .regex(/^[A-Z0-9\s-]+$/i, 'Código postal inválido')
        .trim(),

    // Additional Information
    notes: z
        .string()
        .max(500, 'Las notas no pueden exceder 500 caracteres')
        .optional(),
});

/**
 * TypeScript type inferred from schema
 */
export type CheckoutFormData = z.infer<typeof checkoutSchema>;

/**
 * Validates checkout form data
 * @param data - Form data to validate
 * @returns Validation result with parsed data or errors
 */
export function validateCheckoutForm(data: unknown) {
    return checkoutSchema.safeParse(data);
}
