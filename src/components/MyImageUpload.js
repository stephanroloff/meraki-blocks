import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

function MyImageUpload(props) {
    let { attributes, setAttributes } = props.properties;
    let { mediaURLAttrName } = props;

    const onSelectMedia = (media) => {
        if (media && media.url) {
            setAttributes({ [mediaURLAttrName]: media.url });
        }
    };

    const onDeleteMedia = () => {
        if (attributes[mediaURLAttrName]) {
            setAttributes({ [mediaURLAttrName]: '' });
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
                    value={attributes[mediaURLAttrName] ? attributes[mediaURLAttrName].id : undefined} // Evitar errores
                    render={({ open }) => (
                        <Button variant="primary" onClick={open}>
                            {attributes[mediaURLAttrName] ? 'Change image' : 'Add image'}
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
                    <div style={{ display: "flex", justifyContent: "start", marginTop: "20px" }}>
                        <img 
                            src={attributes[mediaURLAttrName]} 
                            alt="uploaded image"  
                            width="50" 
                            height="50" 
                        />
                    </div>
                </>
            )}
        </>
    );
}

export default MyImageUpload;
