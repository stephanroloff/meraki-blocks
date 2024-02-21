import {
	PanelRow,
	SelectControl,
} from '@wordpress/components';


function MySelectControl(props) {
    let { attributes, setAttributes } = props.properties
    let { label, attrName, options } = props

    return (
        <>
            <PanelRow>
                <SelectControl
                    label={label}
                    value={attributes[attrName]}
                    onChange={(option) => { setAttributes({ [attrName]: option }) }}
                    options={options}
                />
            </PanelRow>
        </>
    );
}

export default MySelectControl;