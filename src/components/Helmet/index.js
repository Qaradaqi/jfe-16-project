import { Helmet } from "react-helmet";

export default function HelemetFunc(props) {
    const {title} = props
    return (
        <Helmet>
            <meta charSet="UTF-8"/>
            <title>{title}</title>
        </Helmet>
    )
}