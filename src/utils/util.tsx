import { useRouter } from 'next/router'
import { useMemo } from 'react'

export const useHref = () => {
  const router = useRouter()

  const href = useMemo(() => {
    const { pathname } = router

    let message;
    if (pathname.includes('/meta-ads')) {
      message = "Olá, vim pelo seu site! Gostaria de informações sobre o Studio de vocês!"
    } else if (pathname.includes('/google-ads')) {
      message = "Olá, vim pelo seu site! Gostaria de informações sobre as aulas de vocês!"
    } else {
      message = "Olá, vim pelo seu site! Gostaria de informações sobre uma futura aula experimental."
    }

    const encodeMessage = encodeURI(message)
    // const href = `https://api.whatsapp.com/send?phone=5541991256464&text=${encodeMessage}`
    const href = `https://tintim.link/whatsapp/38a34398-d03b-423e-982e-f807fe4d8a8f/a5c68c3d-3d49-44b2-99f3-e5146bcf6491`

    return href
  }, [router])

  return href
}
