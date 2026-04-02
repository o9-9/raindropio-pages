import { usePageContext } from 'vike-react/usePageContext'

export default function ErrorPage() {
	const pageContext = usePageContext()
	const { abortStatusCode, abortReason } = pageContext

	if (abortReason == 'email-not-confirmed')
		return (
			<div style={{margin: '3em'}}>
				<h1>This public page is temporarily unavailable</h1>
				<p>The owner of this collection hasn't confirmed their email address yet. To prevent spam, public pages are only accessible when the owner's email is verified.</p>
				<p>If you are the owner of this collection, <a href="https://help.raindrop.io/public-page#why-is-my-public-collection-not-accessible" target="_blank" rel="noreferrer">learn how to fix this</a></p>
			</div>
		)

	return (
		<h1>{abortStatusCode} Error</h1>
	)
}