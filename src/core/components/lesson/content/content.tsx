import DOMPurify from 'dompurify';


interface IContent {
    contentHtml: string;
}


function Content(props: IContent) {

    const { contentHtml } = props;

    const sanitizedHtml = DOMPurify.sanitize(contentHtml)

    return (
        <div
            className="text-base text-[#F0F0F0] leading-relaxed "
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
    )
}

export default Content
