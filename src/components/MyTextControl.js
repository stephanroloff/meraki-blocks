import {
	PanelRow,
	TextControl,
} from '@wordpress/components';


function MyTextControl(props) {
    let { attributes, setAttributes } = props.properties
    let { name, attrName, placeholder } = props

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
                placeholder={placeholder}
			/>
        </PanelRow>
        </>
    );
}

export default MyTextControl;