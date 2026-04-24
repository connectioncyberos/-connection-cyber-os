// Local: web/src/middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          response = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  const path = request.nextUrl.pathname

  // LÓGICA DE PROTEÇÃO DE PORTAL (Liberada para validação interna)
  if (!user && (path.startsWith('/portal') || path.startsWith('/portal-cidadania'))) {
    // Se quiser manter o portal aberto para testes, comente a linha abaixo
    // return NextResponse.redirect(new URL('/login', request.url))
  }

  // REDIRECIONAMENTO INTELIGENTE (O Core do Salto)
  if (user && (path === '/' || path === '/login')) {
    const userContext = user.app_metadata?.context || 'academy'
    
    // Matriz de Salto Federada
    const target = userContext === 'cidadania' ? '/portal-cidadania' : '/portal'
    return NextResponse.redirect(new URL(target, request.url))
  }

  return response
}

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}