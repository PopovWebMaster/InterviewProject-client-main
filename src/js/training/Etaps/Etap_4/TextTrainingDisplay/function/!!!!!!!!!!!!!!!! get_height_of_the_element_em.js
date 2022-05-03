
export const get_height_of_the_element_em = ( elem ) => {

    let style = window.getComputedStyle( elem );
    
    let height = Number( parseFloat( style.height ) );
    let borderTop = Number( parseFloat( style.borderTopWidth ) );
    let borderBottom = Number( parseFloat( style.borderBottomWidth ) );
    let paddingTop = Number( parseFloat( style.paddingTop ) );
    let paddingBottom = Number( parseFloat( style.paddingBottom ) );
    let marginTop = Number( parseFloat( style.marginTop ) );
    let marginBottom = Number( parseFloat( style.marginBottom ) );
    let fontSize = Number( parseFloat( style.fontSize ) );

    let sum = height + borderTop + borderBottom + paddingTop + paddingBottom + marginTop + marginBottom;

    return sum/fontSize;
};