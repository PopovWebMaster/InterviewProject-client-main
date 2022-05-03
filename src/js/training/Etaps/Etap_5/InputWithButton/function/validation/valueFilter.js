import { killer_double_space } from './valueFilter/killer_double_space.js';
import { killer_illegal_first_symbols } from './valueFilter/killer_illegal_first_symbols.js';
import { skips_only_allowed_symbols } from './valueFilter/skips_only_allowed_symbols.js';
import { killer_double_symbols } from './valueFilter/killer_double_symbols.js';

export const valueFilter = ( value ) => {
    let result;

    if( value.length === 0 ){
        result = '';

    }else{
        result = killer_double_space( value );
        
        result = killer_illegal_first_symbols( result );

        result = skips_only_allowed_symbols( result );

        result = killer_double_symbols( result ); 

    };

    return result;
};

