import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

export function fetchDataRestApi(){
    let filteredPostTypes;
    const postTypes = useSelect(
        ( select ) => select( coreDataStore ).getPostTypes({ per_page: 100 } )
    );

    if(postTypes){
        filteredPostTypes = postTypes.filter( ( postType ) => 
            postType.slug !== 'attachment' && 
            postType.slug !== 'wp_font_face' && 
            postType.slug !== 'nav_menu_item' && 
            postType.slug !== 'wp_block' && 
            postType.slug !== 'wp_template' && 
            postType.slug !== 'wp_template_part' && 
            postType.slug !== 'wp_global_styles' && 
            postType.slug !== 'wp_navigation' && 
            postType.slug !== 'wp_font_family'
        );
    }    

    let postTypeOptions=[];

    if(filteredPostTypes){
        filteredPostTypes.forEach(post => {
            postTypeOptions.push(
                { value: post.slug, label: post.name },
            )
        });
    }

    return postTypeOptions;
}