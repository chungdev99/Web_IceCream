import React from 'react';
import ProductImg from './ProductImg';
import Image1 from './Image1';
import { useState } from 'react';
// import Scroll from './Scroll';

function LayoutHome(props) {

    const productListPage = [
        {
            id: 1,
            name: 'kem dâu',
            price: '25.000 đ',
            image: 'http://hinhanhdephd.com/wp-content/uploads/2016/01/nhung-hinh-anh-dep-cua-nhung-ly-kem-mat-lanh-11.jpg'
        },
    
        {
            id: 2,
            name: 'kem vani',
            price: '30.000 đ',
            image: 'https://hinh365.com/wp-content/uploads/2020/06/218-881-tam-anh-ve-kem-oc-que-kem-ly-dep-ngat-ngay-hinh-anh-chat-luong-cao-tren-123rf-com-37.jpg'
        },
    
        {
            id: 3,
            name: 'kem sữa chua',
            price: '15.000 đ',
            image: 'https://kemkepsingapore.com/wp-content/uploads/2021/12/kem-ngon.jpg'
        },

        {
            id: 4,
            name: 'kem SoCola',
            price: '25.000 đ',
            image: 'http://giadinh.mediacdn.vn/2017/photo-2-1491957980364.jpg'
        },

        {
            id: 5,
            name: 'kem khoai môn',
            price: '24.000 đ',
            image: 'http://hinhanhdephd.com/wp-content/uploads/2016/01/nhung-hinh-anh-dep-cua-nhung-ly-kem-mat-lanh-4.jpg'
        },

        {
            id: 6,
            name: 'socola đá xoay',
            price: '40.000 đ',
            image: 'https://quatcafe.vn/public/upload/images/menu_item_icon/mLcMPoWLnE1597678799.png'
        },

        {
            id: 7,
            name: 'matcha đá xoay',
            price: '45.000 đ',
            image: 'https://quatcafe.vn/public/upload/images/menu_item_icon/0854kP2AsA1597682670.png'
        },

        {
            id: 8,
            name: 'Trà đào',
            price: '20.000 đ',
            image: 'https://quatcafe.vn/public/upload/images/menu_item_icon/DVOJaLSoND1597721100.png'
        },

        {
            id: 9,
            name: 'Đá chanh',
            price: '25.000 đ',
            image: 'https://quatcafe.vn/public/upload/images/menu_item_icon/FkamRNKpPq1597678139.png'
        },

        {
            id: 10,
            name: 'Hạt china',
            price: '50.000 đ',
            image: 'https://quatcafe.vn/public/upload/images/menu_item_icon/2qoTmYNG4g1597678190.png'
        },

    ]
    // 'http://mauweb.monamedia.net/iceCream/wp-content/uploads/2017/11/cute-lover.jpg'
    const [productList] = useState(productListPage);
   
   
    return (
        <div>
            <Image1 />
            <ProductImg product={productList} />
        </div>
    );
}

export default LayoutHome;