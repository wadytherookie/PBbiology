import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div dir="rtl" style={{ fontFamily: "Cairo, sans-serif", background: "#000000", minHeight: "100vh", color: "white" }}>
            <header style={{ textAlign: "center", padding: "40px", background: "#4CAF50", color: "white" }}>
                <h1>ممالك الكائنات الحية الست</h1>
                <p>موقع تعليمي مبسط</p>
            </header>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "30px",
                }}
            >
                {[
                    { title: "مملكة الحيوان", description: "تضم الحيوانات متعددة الخلايا التي تتغذى على الكائنات الأخرى." },
                    { title: "مملكة النبات", description: "تضم الكائنات التي تقوم بعملية البناء الضوئي مثل الأشجار والأعشاب." },
                    { title: "مملكة الفطريات", description: "تمتص الغذاء من البيئة مثل الفطر والخميرة." },
                    { title: "مملكة الطلائعيات", description: "كائنات دقيقة مثل الأميبا والطحالب." },
                    { title: "مملكة البدائيات", description: "كائنات مجهرية دون نواة حقيقية." },
                    { title: "مملكة البكتيريا", description: "كائنات دقيقة أحادية الخلية، بعضها مفيد وبعضها ممرض." },
                ].map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#1a1a1a",
                            padding: "20px",
                            borderRadius: "15px",
                            boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            color: "white"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                    >
                        <h2 style={{ color: "#4CAF50" }}>{item.title}</h2>
                        <p>{item.description}</p>
                        <button
                          style={{
                            marginTop: "10px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "10px",
                            background: "#4CAF50",
                            color: "white",
                            cursor: "pointer",
                            transition: "background 0.3s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#45a049")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "#4CAF50")}
                          onClick={() => alert(`مملكة: ${item.title}`)}
                        >
                          عرض المملكة
                        </button>
                    </div>
                ))}
            </div>
        </div>

    </div>
  );
}

export default App;
