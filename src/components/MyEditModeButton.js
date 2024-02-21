import {PanelRow,Button} from '@wordpress/components';

function MyEditModeButton(props) {
    let { attributes, setAttributes } = props.properties
    let { editModeActive } = attributes

    function buttonCliked() {
		if(editModeActive){
			setAttributes({editModeActive: false});
		}else{
			setAttributes({editModeActive: true});
		}
	}

    return (
        <>
            <PanelRow>
                <Button variant="primary" onClick={buttonCliked}>{editModeActive? 'Out of edit mode':'Edit block'}</Button>
            </PanelRow>
        </>
    );
}

export default MyEditModeButton;