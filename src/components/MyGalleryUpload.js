import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

function MyGalleryUpload(props) {
    let { attributes, setAttributes } = props.properties
    let { mediaURLAttrName} = props; 
    // const ALLOWED_MEDIA_TYPES = ['image', 'video']; 
    // addToGallery don't support Videos (stupid thing)

    const onSelectMedia = (media) => {
        setAttributes({ [mediaURLAttrName]: [...media] });
    }

    return (
        <>
            <MediaUploadCheck>
                <MediaUpload
	      			addToGallery={true}
                    onSelect={onSelectMedia}
                    // allowedTypes={ ALLOWED_MEDIA_TYPES }
	                multiple={true}
	                gallery={true}
                    value={[...attributes[mediaURLAttrName].map(item => item.id)]}

	                render={({open}) => (
	                    <Button  
                        variant="primary"
                        onClick={open}>
	                        Add images
	                    </Button>
	                )}
	            />
            </MediaUploadCheck>
        </>
    );
}

export default MyGalleryUpload;