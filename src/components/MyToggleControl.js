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
                __nextHasNoMarginBottom
                name={attrName}
                label={name}
                checked={ attributes[attrName] }
                onChange={value => setAttributes({ [attrName]: value })}
            />		
        </PanelRow>
        </>
    );
}

export default MyToggleControl;