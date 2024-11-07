import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CrownProps {
    width?: number;
    height?: number;
    color?: string;
}

const Crown: React.FC<CrownProps> = ({ width, height, color = '#000' }) => (
    <Svg width={width} height={height} fill="none">
        <Path d="M27.1218 16.6508L26.8355 19.3118L29.1635 19.5622L29.4498 16.9012L27.1218 16.6508ZM17.6982 29.0478H14.3018V31.3892H17.6982V29.0478ZM5.16449 19.3118L4.87827 16.6508L2.55024 16.9012L2.83645 19.5622L5.16449 19.3118ZM11.965 15.0759L14.7584 10.0674L12.7134 8.92691L9.92006 13.9353L11.965 15.0759ZM17.2416 10.0674L20.035 15.0759L22.08 13.9353L19.2866 8.92691L17.2416 10.0674ZM20.035 15.0759C20.2875 15.5286 20.52 15.9484 20.7452 16.2693C20.9772 16.5994 21.2934 16.9641 21.778 17.1775L22.7216 15.0346C22.8088 15.0728 22.794 15.1123 22.6615 14.9237C22.5224 14.7256 22.3574 14.4328 22.08 13.9353L20.035 15.0759ZM23.7131 14.162C23.3093 14.5642 23.0697 14.8009 22.8811 14.9534C22.7014 15.0987 22.6975 15.057 22.7912 15.0441L23.1118 17.3635C23.636 17.2911 24.0401 17.0275 24.3539 16.7736C24.6587 16.527 24.9978 16.1872 25.3655 15.8208L23.7131 14.162ZM21.778 17.1775C22.1968 17.3618 22.6587 17.4261 23.1118 17.3635L22.7912 15.0441C22.7673 15.0474 22.7433 15.0441 22.7216 15.0346L21.778 17.1775ZM6.63446 15.8208C7.00219 16.1872 7.34127 16.527 7.64619 16.7736C7.95993 17.0275 8.36408 17.2911 8.88815 17.3635L9.20887 15.0441C9.30254 15.057 9.29858 15.0987 9.11891 14.9534C8.9304 14.8009 8.69078 14.5642 8.28689 14.162L6.63446 15.8208ZM9.92006 13.9353C9.64264 14.4328 9.47759 14.7256 9.33854 14.9237C9.20609 15.1123 9.19124 15.0728 9.27836 15.0346L10.222 17.1775C10.7065 16.9641 11.0229 16.5994 11.2548 16.2693C11.4801 15.9485 11.7125 15.5286 11.965 15.0759L9.92006 13.9353ZM8.88815 17.3635C9.34133 17.4261 9.80318 17.3618 10.222 17.1775L9.27836 15.0346C9.25676 15.0441 9.23264 15.0474 9.20887 15.0441L8.88815 17.3635ZM14.3018 29.0478C12.0573 29.0478 10.4854 29.0456 9.28557 28.892C8.11848 28.7426 7.45914 28.4661 6.96551 28.0242L5.40389 29.7689C6.38709 30.649 7.57287 31.0333 8.98839 31.2145C10.3712 31.3914 12.1194 31.3892 14.3018 31.3892V29.0478ZM2.83645 19.5622C3.06772 21.7123 3.25123 23.8183 3.56405 25.5262C3.72183 26.3877 3.92083 27.1994 4.19642 27.9039C4.46968 28.6026 4.84667 29.2702 5.40389 29.7689L6.96551 28.0242C6.78431 27.862 6.57803 27.5648 6.37698 27.051C6.17826 26.543 6.01191 25.8944 5.86721 25.1044C5.57501 23.5091 5.40482 21.5462 5.16449 19.3118L2.83645 19.5622ZM26.8355 19.3118C26.5951 21.5462 26.425 23.5091 26.1328 25.1044C25.9881 25.8944 25.8217 26.543 25.6229 27.051C25.422 27.5648 25.2157 27.862 25.0345 28.0242L26.5961 29.7689C27.1533 29.2702 27.5303 28.6026 27.8036 27.9039C28.0791 27.1994 28.2782 26.3877 28.436 25.5262C28.7488 23.8183 28.9322 21.7123 29.1635 19.5622L26.8355 19.3118ZM17.6982 31.3892C19.8806 31.3892 21.6287 31.3914 23.0116 31.2145C24.4271 31.0333 25.613 30.649 26.5961 29.7689L25.0345 28.0242C24.5409 28.4661 23.8815 28.7426 22.7144 28.892C21.5146 29.0456 19.9427 29.0478 17.6982 29.0478V31.3892ZM14.0488 5.24288C14.0488 4.16524 14.9223 3.29166 16 3.29166V0.950195C13.6292 0.950195 11.7073 2.8721 11.7073 5.24288H14.0488ZM16 3.29166C17.0777 3.29166 17.9512 4.16524 17.9512 5.24288H20.2927C20.2927 2.8721 18.3708 0.950195 16 0.950195V3.29166ZM29.6585 11.4868C29.6585 12.1334 29.1344 12.6575 28.4878 12.6575V14.999C30.4275 14.999 32 13.4264 32 11.4868H29.6585ZM27.3171 11.4868C27.3171 10.8402 27.8412 10.316 28.4878 10.316V7.97459C26.5481 7.97459 24.9756 9.54705 24.9756 11.4868H27.3171ZM28.4878 10.316C29.1344 10.316 29.6585 10.8402 29.6585 11.4868H32C32 9.54705 30.4275 7.97459 28.4878 7.97459V10.316ZM3.5122 12.6575C2.86562 12.6575 2.34146 12.1334 2.34146 11.4868H0C0 13.4264 1.57246 14.999 3.5122 14.999V12.6575ZM2.34146 11.4868C2.34146 10.8402 2.86562 10.316 3.5122 10.316V7.97459C1.57246 7.97459 0 9.54705 0 11.4868H2.34146ZM3.5122 10.316C4.15877 10.316 4.68293 10.8402 4.68293 11.4868H7.02439C7.02439 9.54705 5.45193 7.97459 3.5122 7.97459V10.316ZM28.4878 12.6575C28.4831 12.6575 28.4784 12.6575 28.4738 12.6574L28.4466 14.9987C28.4603 14.9988 28.4741 14.999 28.4878 14.999V12.6575ZM29.4498 16.9012C29.5252 16.1989 29.5914 15.5856 29.6276 15.0739C29.6632 14.5727 29.6766 14.0919 29.6204 13.6726L27.2997 13.9836C27.3227 14.155 27.3253 14.4383 27.2921 14.9084C27.2595 15.3681 27.1989 15.9334 27.1218 16.6508L29.4498 16.9012ZM28.4738 12.6574C28.1258 12.6534 27.8149 12.4987 27.6012 12.2514L25.8293 13.782C26.4632 14.5159 27.4001 14.9866 28.4466 14.9987L28.4738 12.6574ZM27.6012 12.2514C27.4234 12.0456 27.3171 11.7801 27.3171 11.4868H24.9756C24.9756 12.3632 25.2981 13.1672 25.8293 13.782L27.6012 12.2514ZM25.3655 15.8208C26.4231 14.7675 26.9677 14.2366 27.3302 14.0129L26.1003 12.0205C25.4448 12.4251 24.6587 13.2199 23.7131 14.162L25.3655 15.8208ZM4.68293 11.4868C4.68293 11.7801 4.57659 12.0456 4.39881 12.2514L6.17065 13.782C6.70189 13.1672 7.02439 12.3632 7.02439 11.4868H4.68293ZM8.28689 14.162C7.34121 13.2199 6.5551 12.4251 5.89964 12.0205L4.66981 14.0129C5.03223 14.2366 5.57694 14.7675 6.63446 15.8208L8.28689 14.162ZM4.39881 12.2514C4.18513 12.4987 3.87422 12.6534 3.52631 12.6574L3.55339 14.9987C4.59982 14.9866 5.5368 14.5159 6.17065 13.782L4.39881 12.2514ZM3.52631 12.6574C3.52159 12.6575 3.51689 12.6575 3.5122 12.6575V14.999C3.52595 14.999 3.53968 14.9988 3.55339 14.9987L3.52631 12.6574ZM4.87827 16.6508C4.80111 15.9334 4.74048 15.3681 4.70792 14.9084C4.67461 14.4383 4.67724 14.155 4.70021 13.9836L2.37947 13.6726C2.32331 14.0919 2.3368 14.5727 2.37231 15.0739C2.40855 15.5856 2.47469 16.1989 2.55024 16.9012L4.87827 16.6508ZM17.9512 5.24288C17.9512 6.00001 17.5202 6.65851 16.8848 6.9827L17.9489 9.06841C19.3375 8.35991 20.2927 6.91395 20.2927 5.24288H17.9512ZM16.8848 6.9827C16.6205 7.11753 16.3209 7.1941 16 7.1941V9.53556C16.6993 9.53556 17.3627 9.36744 17.9489 9.06841L16.8848 6.9827ZM19.2866 8.92691C18.9646 8.34953 18.6752 7.83013 18.4097 7.40514L16.424 8.64596C16.6519 9.01064 16.9097 9.47231 17.2416 10.0674L19.2866 8.92691ZM16 7.1941C15.6791 7.1941 15.3795 7.11753 15.1152 6.9827L14.0511 9.06841C14.6373 9.36744 15.3007 9.53556 16 9.53556V7.1941ZM15.1152 6.9827C14.4798 6.65851 14.0488 6.00001 14.0488 5.24288H11.7073C11.7073 6.91395 12.6624 8.35991 14.0511 9.06841L15.1152 6.9827ZM14.7584 10.0674C15.0903 9.47231 15.3481 9.01064 15.576 8.64596L13.5903 7.40514C13.3248 7.83013 13.0354 8.34953 12.7134 8.92691L14.7584 10.0674Z" fill={color} />
        <Path d="M5.07324 24.7549H26.9269" stroke={color} stroke-width="2.34146" stroke-linecap="round" />
    </Svg>
);

export default Crown;