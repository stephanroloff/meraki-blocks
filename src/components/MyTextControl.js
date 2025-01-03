import {
	PanelRow,
	TextControl,
} from '@wordpress/components';


function MyTextControl(props) {
    let { attributes, setAttributes } = props.properties
    let { name, attrName } = props

    return (
        <>
        <PanelRow>	
            <TextControl
                __nextHasNoMarginBottom
                __next40pxDefaultSize
                label={name}
				rows={15}
                value={ attributes[attrName] }
                onChange={value => setAttributes({ [attrName]: value })}
			/>
        </PanelRow>
        </>
    );
}

export default MyTextControl;