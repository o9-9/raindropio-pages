import { usePageContext } from 'vike-react/usePageContext'

export default function ErrorPage() {
	const pageContext = usePageContext()
	const { abortStatusCode, abortReason } = pageContext

	if (abortReason == 'email-not-confirmed')
		return <h1>Ask public page user to confirm email address</h1>

	return (
		<h1>{abortStatusCode} Error</h1>
	)
}