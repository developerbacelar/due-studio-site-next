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
    const href = `https://api.whatsapp.com/send?phone=5541991256464&text=${encodeMessage}`

    return href
  }, [router])

  return href
}
