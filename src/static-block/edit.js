import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import {MyLoader} from '../components/MyLoader';

export default function Edit() {
	return (
		<p {...useBlockProps()}>
			<MyLoader width={100} height={400}/>
			{__('Im a STATIC BLOCK!', 'meraki')}
		</p>
	);
}

