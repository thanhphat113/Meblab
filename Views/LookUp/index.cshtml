import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import { useRef, useState } from 'react';
import axios from 'axios';
import images from '../assets/images';
import { VscLoading } from 'react-icons/vsc';
import Button from '../components/Button';

function LookUpPage() {
    const docsRef = useRef(null);
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
    const location = useLocation();
    const [formData, setFormData] = useState({
        MaTraCuu: "",
        SoDienThoai: "",
    });
    const [errorMessage, setErrorMessage] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }

    console.log(errorMessage);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.SoDienThoai.trim()) {
            setErrorMessage(prevState => ({...errorMessage, 'SoDienThoai': "Số điện thoại không được để trống!"}))
            return;
        }
        if (!/^\d{10}$/.test(formData.SoDienThoai)) {
            setErrorMessage(prevState => ({...errorMessage, 'SoDienThoai': "Số điện thoại không hợp lệ. Vui lòng nhập 10 chữ số."}))
            return;
        }
        if (!formData.MaTraCuu.trim()) {
            setErrorMessage(prevState => ({...errorMessage, 'MaTraCuu': "Mã tra cứu không được để trống."}));
            return;
        }

        setIsLoadingSubmit(true);

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_API}/api/TraCuuKetQua/khach-hang/tra-cuu-ket-qua`,
                formData,
                { responseType: 'blob' }
            );

            if (response.data) {
                const blob = new Blob([response.data], { type: 'application/pdf' });
                const urlPdf = URL.createObjectURL(blob);

                navigate('/ket-qua-tra-cuu', { state: urlPdf });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoadingSubmit(false);
        }
    };

    const scrollToDocs = () => {
        if (docsRef.current) {
            docsRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }

    return (
        <section className="md:px-8 lg:px-0 lg:mx-32 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="rounded-lg">
                <h1 className="mx-auto text-3xl text-slate-800 font-medium">
                    Tra cứu kết quả xét nghiệm
                </h1>
                <div className="type grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Link to="/tra-cuu"
                          className={`rounded px-4 py-2 text-base md:text-lg text-center ${location.pathname === '/tra-cuu' ? ' text-white bg-sky-500' : 'text-sky-500 bg-white ring-1 ring-sky-500 ring-inset'}`}>
                        Khách hàng
                    </Link>

                    <Link to="/don-vi-tra-cuu"
                          className={`rounded-md px-4 py-2 text-base md:text-lg text-center ${location.pathname === '/don-vi-tra-cuu' ? ' text-white bg-sky-500' : 'text-sky-500 bg-white ring-1 ring-sky-500 ring-inset'}`}>
                        Đơn vị gửi mẫu
                    </Link>
                    <button onClick={scrollToDocs} className="md:hidden text-slate-600 flex items-center gap-2">
                        Hướng dẫn tra cứu
                        <FaArrowDown />
                    </button>
                </div>

                <div className="flex flex-col gap-6 mt-6">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="SoDienThoai" className="text-sm text-gray-900 leading-6">Số điện thoại</label>
                        <input
                            type="text"
                            id="SoDienThoai"
                            name="SoDienThoai"
                            className="py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2 placeholder:font-sans"
                            placeholder={'Nhập số điện thoại'}
                            onChange={handleChange}
                        />
                        {errorMessage.SoDienThoai && (
                            <p className="italic text-xs text-red-500 font-sans font-medium">{errorMessage.SoDienThoai}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-start justify-between gap-4">
                            <label htmlFor="MaTraCuu" className="text-sm text-gray-900 leading-6 text-nowrap">Mã tra
                                cứu</label>
                        </div>
                        <input
                            type="text"
                            id="MaTraCuu"
                            name="MaTraCuu"
                            className="py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2 placeholder:font-sans"
                            placeholder={'Nhập mã tra cứu'}
                            onChange={handleChange}
                        />
                        {errorMessage.SoDienThoai && (
                            <p className="italic text-xs text-red-500 font-sans font-medium">{errorMessage.SoDienThoai}</p>
                        )}
                    </div>
                    <div className="text-right">
                        {isLoadingSubmit ? (
                            <button
                                className="px-4 py-1 bg-sky-500/50 rounded-md text-white"
                                onClick={handleSubmit}
                            >
                                <VscLoading className='animate-spin text-2xl' />
                                <span></span>
                            </button>
                        ) : (
                            <button onClick={handleSubmit} className="px-4 py-1 bg-sky-500 rounded-md text-white">
                                Tra cứu
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div ref={docsRef} className="overflow-hidden rounded-lg">
                <img
                    src={images.hdkhachhang}
                    alt="" />
            </div>
        </section>
    );
}

export default LookUpPage;