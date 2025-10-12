import DOMPurify from 'dompurify';


interface IContent {
    contentHtml: string;
}


function Content(props: IContent) {

    const { contentHtml } = props;

    const sanitizedHtml = DOMPurify.sanitize(contentHtml)

    return (
        <div className='editor-content px-8'>
            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }}/>
        </div>
    )
}

export default Content
