//@ts-ignore
import { formatTime, sleep } from '@/util/index';
import { useRequest } from 'ahooks';
import { NavBar, DotLoading, Image, Toast, Dialog } from 'antd-mobile';
import { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'umi';
//@ts-ignore
import { getOrderList, updateOrder } from '@/api/index.js';
import styles from './order.less';

function Order(props: any) {
    const history = useHistory();
    const { data, run }: any = useRequest(getOrderList, {
        loadingDelay: 100,
    });
    const [pageLoading, setPageLoading] = useState(true);

    const orderData: [] = useMemo(() => {
        console.log('order', data);
        return data || [];
    }, [data]);

    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false);
        }, 800);
    }, []);
    const handleKey = async ({ key, item }: any) => {
        console.log('key,item', key, item);
        switch (key) {
            case 'pinjia':
                Toast.show({
                    content: '暂不支持评价',
                    duration: 1000,
                    maskClickable: false,
                });
                break;
            case 'cancel':
                Dialog.confirm({
                    content: '好货不等人，真的不要了吗？',
                    onConfirm: async () => {
                        await sleep(1000);
                        await updateOrder({
                            order_id: item.order_id,
                            order_status: key,
                        });
                        Toast.show({
                            content: '已取消',
                            duration: 1000,
                            maskClickable: false,
                        });
                        run();
                    },
                });
                break;
            case 'pay':
                Dialog.confirm({
                    content: '确定支付吗？',
                    onConfirm: async () => {
                        await sleep(1000);
                        await updateOrder({
                            order_id: item.order_id,
                            order_status: key,
                        });
                        Toast.show({
                            content: '支付成功',
                            icon: 'success',
                            duration: 1000,
                            maskClickable: false,
                        });
                        run();
                    },
                });
                break;
            default:
                break;
        }
    };
    return (
        <div className={styles.content}>
            <div className={styles.navBar}>
                <NavBar
                    back={null}
                    onBack={() => {
                        history.push(`/center/setting`);
                    }}
                >
                    电影订单
                </NavBar>
            </div>
            {pageLoading ? (
                <div
                    style={{
                        fontSize: 15,
                        color: 'gray',
                        textAlign: 'center',
                        marginTop: 50,
                    }}
                >
                    加载中 <DotLoading />
                </div>
            ) : (
                <div className={styles.orders}>
                    {orderData.length > 0
                        ? orderData.map((item: any) => (
                              <OrderCard
                                  key={item.order_id}
                                  order={item}
                                  handleKey={(key: any) => {
                                      handleKey({ key, item });
                                  }}
                              ></OrderCard>
                          ))
                        : <div className={styles.empty}>
							<img className={styles.emptyimg} src="https://assets.maizuo.com/h5/v5/public/app/img/noneMovies@2x.0d5d2c45.png" />
							<p className={styles.txt}>暂无订单</p>
						</div>
					}
                </div>
            )}
        </div>
    );
}
Order.wrappers = ['@/wrappers/LoginAuth'];
export default Order;

const OrderCard = ({ order, handleKey }: any) => {
    let {
        order_status,
        order_price,
        create_time,
        order_id,
        cinemName,
        film: { name, poster },
    } = order;
    return (
        <div className={styles.order}>
            <div className={styles.orderMsg}>
                <div className={styles.ordercontent}>
                    <div className={styles.poster}>
                        <Image src={poster} />
                    </div>
                    <div className={styles.ordertext}>
                        <p className={styles.mname}>{name}</p>
                        <p className={styles.cname}>{cinemName}</p>
                        <p className={styles.create}>
                            {formatTime(create_time)}
                        </p>
                    </div>
                </div>

                <div className={styles.price}>
                    <p className={styles.jiage}>￥{order_price / 100}</p>
                    实付
                </div>
            </div>
            {order_status === 0 && (
                <div className={styles.actions}>
                    <div
                        onClick={() => handleKey('pay')}
                        className={`${styles.txtbtn} ${styles.blue}`}
                    >
                        去支付
                    </div>
                    <div
                        onClick={() => handleKey('cancel')}
                        className={styles.txtbtn}
                    >
                        取消订单
                    </div>
                </div>
            )}
            {order_status === 1 && (
                <div className={styles.actions}>
                    <div className={`${styles.txtbtn} ${styles.gray}`}>
                        已取消
                    </div>
                </div>
            )}
            {order_status === 2 && (
                <div className={styles.actions}>
                    <div
                        onClick={() => handleKey('pinjia')}
                        className={`${styles.txtbtn}`}
                    >
                        去评价
                    </div>
                    <div className={`${styles.txtbtn} ${styles.noborder}`}>
                        已完成
                    </div>
                </div>
            )}
        </div>
    );
};
