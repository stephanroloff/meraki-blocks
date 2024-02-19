import {
	PanelRow,
	ToggleControl,
} from '@wordpress/components';


function MyToggleControl(props) {
    let { attributes, setAttributes } = props.properties
    let { name, attrName } = props

    return (
        <>
        <PanelRow>
            <ToggleControl
                label={name}
                checked={ attributes[attrName] }
                onChange={value => setAttributes({ [attrName]: value })}
            />		
        </PanelRow>
        </>
    );
}

export default MyToggleControl;