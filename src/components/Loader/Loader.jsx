import css from './Loader.module.css';

import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};
