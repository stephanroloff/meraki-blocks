import {
	PanelRow,
	TextareaControl,
} from '@wordpress/components';


function MyTextareaControl(props) {
    let { attributes, setAttributes } = props.properties
    let { name, attrName } = props

    return (
        <>
        <PanelRow>	
            <TextareaControl
                __nextHasNoMarginBottom
                label={name}
				rows={15}
                value={ attributes[attrName] }
                onChange={value => setAttributes({ [attrName]: value })}
			/>
        </PanelRow>
        </>
    );
}

export default MyTextareaControl;