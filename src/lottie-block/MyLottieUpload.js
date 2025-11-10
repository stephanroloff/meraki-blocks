import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

function MyLottieUpload(props) {
    let { attributes, setAttributes } = props.properties;
    let { mediaURLAttrName } = props;

    const onSelectMedia = (media) => {
        if (media && media.url) {
            setAttributes({ 
                [mediaURLAttrName]: media.url,
                [`${mediaURLAttrName}Id`]: media.id 
            });
        }
    };

    const onDeleteMedia = () => {
        if (attributes[mediaURLAttrName]) {
            setAttributes({ 
                [mediaURLAttrName]: '',
                [`${mediaURLAttrName}Id`]: undefined 
            });
        }
    };

    return (
        <>
            <MediaUploadCheck>
                <MediaUpload
                    addToGallery={false}
                    onSelect={onSelectMedia}
                    multiple={false}
                    gallery={false}
                    allowedTypes={['application/json', 'json']}
                    value={attributes[`${mediaURLAttrName}Id`]}
                    render={({ open }) => (
                        <Button variant="primary" onClick={open}>
                            {attributes[mediaURLAttrName] ? 'Change Lottie File' : 'Upload Lottie File'}
                        </Button>
                    )}
                />
            </MediaUploadCheck>
            {attributes[mediaURLAttrName] && (
                <>
                    <div style={{ display: "flex", justifyContent: "start", marginTop: "20px" }}>
                        <Button 
                            variant="secondary" 
                            onClick={onDeleteMedia}
                            style={{ color: "red", boxShadow: "0 0 0 1px red" }}>
                            Delete
                        </Button>
                    </div>
                    <div style={{ display: "flex", justifyContent: "start", marginTop: "20px", flexDirection: "column" }}>
                        <p style={{ margin: "5px 0", fontSize: "12px" }}>Selected file:</p>
                        <code style={{ fontSize: "11px", wordBreak: "break-all" }}>
                            {attributes[mediaURLAttrName]}
                        </code>
                    </div>
                </>
            )}
        </>
    );
}

export default MyLottieUpload;

