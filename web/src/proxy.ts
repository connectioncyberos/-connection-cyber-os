import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

// No Next.js 16, a função deve ser exportada como default ou ter o nome 'proxy'
export default async function proxy(request: NextRequest) {
  // A função updateSession (que está no utils) faz a verificação de cookies e proteção de rotas
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Faz o match de todas as rotas exceto:
     * - _next/static (arquivos estáticos)
     * - _next/image (otimização de imagens)
     * - favicon.ico (ícone do site)
     * - imagens soltas na raiz (png, svg, jpg)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}