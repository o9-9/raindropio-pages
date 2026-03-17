import { useLinkFactory } from '~modules/router'

export function useFilterHref(filter) {
    const getLink = useLinkFactory()

    return getLink({
        appendSearch: filter.includes(' ') ? `"${filter}"` : filter
    })
}