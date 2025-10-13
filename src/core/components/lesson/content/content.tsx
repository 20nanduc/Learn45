import DOMPurify from 'dompurify';


interface IContent {
    contentHtml: string;
}


function Content(props: IContent) {

    const { contentHtml } = props;

    const sanitizedHtml = DOMPurify.sanitize(contentHtml,
        {
            ALLOWED_TAGS: [
                "b", "i", "em", "strong", "u", "p", "br",
                "ul", "ol", "li", "blockquote", "code", "pre",
                "h1", "h2", "h3", "h4", "h5", "h6", "span"
            ],
            ALLOWED_ATTR: ["class"], 
            FORBID_TAGS: ["a", "img", "video", "audio", "iframe"],
            FORBID_ATTR: ["href", "src", "srcset", "onerror", "onclick"],
            USE_PROFILES: { html: true }, 
        })

    return (
        <div className='editor-content px-8'>
            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </div>
    )
}

export default Content
