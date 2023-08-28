import {Field, Formik, Form, ErrorMessage} from "formik";
import {useEffect} from "react";
import * as Yup from 'yup';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export function HealthDeclaration() {
    // const navigate = useNavigate();
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <div className="m-4">
                            <Formik initialValues={
                                {
                                    fullName: "",
                                    idCard: 0,
                                    yearOfBirth: 1901,
                                    gender: '0',
                                    national: "",
                                    workingCompany: "",
                                    workingParts: "",
                                    healthInsuranceCard: "",
                                    province: "",
                                    district: "",
                                    wards: "",
                                    address: "",
                                    phone: "",
                                    email: "",
                                    territory: "",
                                    symptom: [],
                                    contact: [],
                                }
                            }
                                    onSubmit={(values, {setSubmitting}) => {
                                        //Call
                                        console.log(values);
                                        setTimeout(() => {
                                            setSubmitting(false);
                                            toast.success("Thêm mới thành công")
                                        }, 1000)
                                    }}
                                    validationSchema={
                                        Yup.object({
                                            fullName: Yup.string()
                                                .required("Required"),
                                            idCard: Yup.number()
                                                .required("Required"),
                                            yearOfBirth: Yup.number()
                                                .required("Required")
                                                .min(1900),
                                            national: Yup.string()
                                                .required("Required"),
                                            province: Yup.string()
                                                .required("Required"),
                                            district: Yup.string()
                                                .required("Required"),
                                            wards: Yup.string()
                                                .required("Required"),
                                            address: Yup.string()
                                                .required("Required"),
                                            phone: Yup.number()
                                                .required("Required"),
                                            email: Yup.string()
                                                .required("Required")
                                                .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email address")
                                        })
                                    }
                            >
                                <Form>
                                    <h1>Tờ khai y tế</h1>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="inputName">Họ và tên</label>
                                        <Field name="fullName" className="form-control" id="inputName"/>
                                        <ErrorMessage name="fullName" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="a">Số hộ chiếu/CMND</label>
                                        <Field type="number" name="idCard" className="form-control" id="a"/>
                                        <ErrorMessage name="idCard" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="b">Năm sinh</label>
                                        <Field type="number" min="1901" name="yearOfBirth" className="form-control" id="b"/>
                                        <ErrorMessage name="yearOfBirth" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="c">Giới tính</label>
                                        <div className="form-check form-check-inline">
                                            <Field name="gender" className="form-check-input" type="radio"
                                                   id="inlineRadio1"
                                                   value="0"/>
                                            <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Field name="gender" className="form-check-input" type="radio"
                                                   id="inlineRadio2"
                                                   value="1"/>
                                            <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="d">Quốc tịch</label>
                                        <Field name="national" className="form-control" id="d"/>
                                        <ErrorMessage name="national" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="e">Công ty làm việc</label>
                                        <Field name="workingCompany" className="form-control" id="e"/>
                                        <ErrorMessage name="workingCompany" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="f">Bộ phận làm việc</label>
                                        <Field name="workingParts" className="form-control" id="f"/>
                                        <ErrorMessage name="workingParts" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <Field type="checkbox" name="healthInsuranceCard" value="yes" className="form-check-input" id="g"/>
                                            <label className="form-label" htmlFor="g">Có thẻ bảo hiểm y tế</label>
                                        </div>
                                    </div>
                                    <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="h">Tỉnh thành</label>
                                        <Field name="province" className="form-control" id="h"/>
                                        <ErrorMessage name="province" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="i">Quận/Huyện</label>
                                        <Field name="district" className="form-control" id="i"/>
                                        <ErrorMessage name="district" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="j">Phường/Xã</label>
                                        <Field name="wards" className="form-control" id="j"/>
                                        <ErrorMessage name="wards" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="l">Số nhà</label>
                                        <Field name="address" className="form-control" id="l"/>
                                        <ErrorMessage name="address" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="m">Điện thoại</label>
                                        <Field typ="number" name="phone" className="form-control" id="m"/>
                                        <ErrorMessage name="phone" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="o">Email</label>
                                        <Field name="email" className="form-control" id="o"/>
                                        <ErrorMessage name="email" className="form-err" component='span'></ErrorMessage>
                                    </div>

                                    <hr/>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="lanhtho">
                                            <h5>Trong vòng 14 ngày qua, anh/chị có đến quốc gia/lãnh thổ nào(Có thể đi qua nhiều quốc gia)</h5>
                                        </label>
                                        <Field name="territory" className="form-control" id="lanhtho"/>
                                        <ErrorMessage name="territory" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <br/>

                                    <label className='form-label'>
                                        <h5>Trong vòng 14 ngày qua, anh/chị có thấy dấu hiệu nào sau đây không?</h5>
                                    </label>
                                    <div className="form-check">
                                        <Field name="symptom" className="form-check-input" type="checkbox" value="1"
                                               id="ss"/>
                                        <label className="form-check-label" htmlFor="ss">
                                            Sốt
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Field name="symptom" className="form-check-input" type="checkbox" value="2" id="hh"/>
                                        <label className="form-check-label" htmlFor="hh">
                                            Ho
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Field name="symptom" className="form-check-input" type="checkbox" value="3"
                                               id="bb"/>
                                        <label className="form-check-label" htmlFor="bb">
                                            Khó thở
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Field name="symptom" className="form-check-input" type="checkbox" value="4"
                                               id="vp"/>
                                        <label className="form-check-label" htmlFor="vp">
                                            Viêm phổi
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Field name="symptom" className="form-check-input" type="checkbox" value="5" id="dh"/>
                                        <label className="form-check-label" htmlFor="dh">
                                            Đau họng
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Field name="symptom" className="form-check-input" type="checkbox" value="6"
                                               id="mm"/>
                                        <label className="form-check-label" htmlFor="mm">
                                            Mệt mỏi
                                        </label>
                                    </div>

                                    <br/>
                                    <label className='form-label'>
                                        <h5>Trong vòng 14 ngày qua, anh/chị có đến quốc gia/vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</h5>
                                    </label>
                                    <div className="form-check">
                                        <Field name="contact" className="form-check-input" type="checkbox" value="1"
                                               id="nghi"/>
                                        <label className="form-check-label" htmlFor="nghi">
                                            Người bệnh hoặc nghi ngờ mắc bệnh COVID-19
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Field name="contact" className="form-check-input" type="checkbox" value="2" id="cb1"/>
                                        <label className="form-check-label" htmlFor="cb1">
                                            Người từ nước có mắc bệnh COVID-19
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Field name="contact" className="form-check-input" type="checkbox" value="3"
                                               id="cb2"/>
                                        <label className="form-check-label" htmlFor="cb2">
                                            Người có biểu hiện (sốt, ho, khó thở, viêm phổi)
                                        </label>
                                    </div>

                                    <br/>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>

            </div>
        </>
    )
}