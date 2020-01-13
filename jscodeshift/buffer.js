// import { Dropdown, Belt, Display } from "@carta/ink";

// export default ({ isLoading }) =>
//   !props.isLoading && (
//     <Belt>
//       <Dropdown disabled />
//     </Belt>
//   );

// export default ({ isLoading }) => (
//   <Display when={ !isLoading }>
//     <Belt noMargins>
//       <Dropdown isDisabled />
//     </Belt>
//   </Display>
// )

import { Dropdown, Belt, Display } from "@carta/ink";

export default ({ isLoading }) =>
  !isLoading && (
    <Belt>
      <Dropdown isDisabled />
    </Belt>
  );
