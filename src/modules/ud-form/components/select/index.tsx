import UDFormFieldWrapper from '../wrapper';
import UDSelect from './control';

const UDFormSelect = UDFormFieldWrapper(UDSelect, { wrapController: true });
export default UDFormSelect;
