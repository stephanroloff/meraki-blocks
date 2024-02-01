import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import MyMediaUpload from '../components/MyMediaUpload';
import './editor.scss';

export default function Edit(props) {
	let { attributes, setAttributes } = props;
	let { titleCarousel1 } = attributes;

	const MY_TEMPLATE = [
		['core/heading', { placeholder: 'Book Title' }],
		['core/paragraph', { placeholder: 'Summary' }],
	];

	return (
		<div {...useBlockProps({
			class: 'siono'
		})}>
			<InnerBlocks
				template={MY_TEMPLATE}
			/>
		</div>
	);
}

