import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function Map(props) {
  return (
    <Svg viewBox="0 0 479.386 479.386" {...props}>
      <G fill="#00bbd3">
        <Path d="M435.533 411.056H255.288v34.482h190.694zM33.77 445.538h116.506l3.657-70.531H57.28z" />
        <Path d="M426.129 384.411v-2.612l-8.359-27.167h-84.637c-7.314 0-13.061-5.747-13.061-13.061 0-1.045.522-2.612 1.045-3.657 1.567-5.224 6.269-8.882 12.016-8.882h75.233v-2.612l-10.449-35.004h-90.384l-56.424 75.233-1.567 1.567-.522.522c-.522.522-1.567 1.045-2.612 1.567-1.567 1.045-3.657 1.045-5.747 1.045-4.18 0-7.837-2.09-10.449-5.224l-55.38-74.71H86.015l-18.808 53.812v4.18H168.04c3.657 0 7.314 1.567 9.404 4.18 2.09 2.09 3.657 5.747 3.657 9.404l-4.702 79.412v3.135h52.767v-48.065-2.09-1.567c2.09-5.224 6.792-8.882 12.539-8.882h181.29l3.134-.524z" />
      </G>
      <Path
        d="M173.264 297.685l54.857 73.665c3.135 4.18 7.837 6.269 12.539 6.269 2.612 0 4.702-.522 6.792-1.567 1.045-.522 2.09-1.045 3.135-2.09 1.045-.522 2.09-1.567 2.612-2.612l55.38-74.188 5.224-6.792 18.286-24.555 20.376-27.167c21.42-28.735 31.869-63.216 29.78-97.176C377.542 65.195 315.37 5.636 240.66 5.636c-73.665 0-135.837 59.559-141.584 135.837-2.09 33.437 8.359 67.918 29.78 97.176l20.376 27.167.522.522 22.988 30.824.522.523zm66.351-187.559c15.151 0 26.645 11.494 26.645 26.645 0 14.629-12.016 26.645-26.645 26.645S212.97 151.4 212.97 136.771c0-15.152 11.494-26.645 26.645-26.645z"
        fill="#455a64"
      />
      <Path
        d="M478.897 453.897L422.472 273.13c-2.09-6.792-8.359-10.971-15.151-10.971h-75.233l-18.286 24.555-5.224 6.792h87.249l9.927 31.869v.522h-72.62c-7.314 0-12.539 4.18-14.629 10.449-.522 1.567-1.045 3.135-1.045 4.702 0 8.882 6.792 15.673 15.673 15.673h82.547l7.837 24.555v.522h-181.29c-7.314 0-13.061 4.702-15.151 10.971-.522 1.567-.522 3.135-.522 4.702v44.93h-47.543v-.522l4.702-79.412c0-4.18-1.045-8.359-4.18-11.494s-7.314-4.702-11.494-4.702h-98.22v-.522l17.763-52.245h85.682l-.522-.522-22.988-30.825H76.611c-6.792 0-12.539 4.18-14.629 10.449L.856 453.375c-1.567 4.702-1.045 9.927 2.09 14.106 3.135 4.18 7.837 6.269 12.539 6.269h448.261c5.225 0 9.404-2.612 12.539-6.269 3.134-3.657 3.657-8.882 2.612-13.584zm-331.233-10.971H37.427L59.37 377.62h91.951l-3.657 65.306zm110.237 0v-29.257h175.543l8.882 29.257H257.901z"
        fill="#455a64"
      />
    </Svg>
  );
}

export default Map;
