import React from 'react'

const AnimatedCarosule = () => {

    const row1 = [
        "https://upload.wikimedia.org/wikipedia/commons/d/d1/University_of_Eastern_Finland_logo.png",
        "https://insidehpc.com/wp-content/uploads/2024/07/Silo-AI-logo-2-1-0724.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvjzor-2W1mcD7hCD_8WYyHYFm_K3foC-3m5uG7axVtsnnhOT_HHhKkmEJbO0v01htp0&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jHXLwH1C4qeZQQgT55E5ukSNkaKj7txQyg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4SGe5UjrzCg-oeWjY3P17nCsMt-17n482Jc0KWwDP9gCspuVmeFKMi4i95WezaMCv4U&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2huqxzLrC5bYTEVMciFS7Lvqwgtsvqe3WA&s",
      ];
    
      const row2 = [
        "https://seeklogo.com/images/M/missouri-state-university-logo-C29A05DBA4-seeklogo.com.png",
        "https://www.sharpnecdisplays.eu/p/download/v/6ca440bb9d402c310f73816cb0105d4e/cp/Products/Shared/CaseStudies/ParthenopeUniversity/ParthenopeUniversity_lv/ParthenopeUniversity-Logo.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NPBNuhe1sVgsP0WLTfvadaJ6XOHdCDp8_Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMyOgtI9qJw64b4ma56j591k_WUSfmZPRA_euUlCjLvnTNQILCUjGnhtgNwg8KC2DdwAw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8Ziu6AUJR4BRbAmABkHq99dOeNzuBPnmoQ&s",
        "https://www.eduopinions.com/wp-content/uploads/2017/09/American-University-of-Armenia-AUA-logo.png",
      ];
  return (
    <div className='wrapper font-mono' id='collaborator'>
        <h2 className="Text font-semibold text-3xl">With Great Outcomes</h2>
        <p className='Note mt-2'>Our Collaborator with great oppourtunity</p>
        <div className='marquee'>
            <div className="MarqueeGroup">
                {row1.map(el=> (
                    <div className="ImageGroup">
                        <img src={el} alt='image' className='Image' />
                    </div>
                ))}
            </div>
            <div className="MarqueeGroup">
                {row1.map(el=> (
                    <div className="ImageGroup">
                        <img src={el} alt='image' className='Image' />
                    </div>
                ))}
            </div>
        </div>
        <div className='marquee'>
            <div className="MarqueeGroup2">
                {row2.map(el=> (
                    <div className="ImageGroup">
                        <img src={el} alt='image' className='Image' />
                    </div>
                ))}
            </div>
            <div className="MarqueeGroup2">
                {row2.map(el=> (
                    <div className="ImageGroup">
                        <img src={el} alt='image' className='Image' />
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default AnimatedCarosule