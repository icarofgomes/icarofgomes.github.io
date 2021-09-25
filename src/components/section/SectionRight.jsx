import React from 'react';

function SectionRight() {
  return(
    <section className="flex">
      <table className="m-auto text-center">
        <tr>
          <td className="w-2/5">
            <img
              src="https://uploads.jovemnerd.com.br/wp-content/uploads/2021/05/luffy-e-o-personagem-favorito-dos-leitores-de-one-piece.jpg"
              alt="Luffy"
            />
          </td>
          <td className="w-3/5">
            <ul className="text-left">
              <li>Nome do Projeto</li>
              <hr />
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab magnam ratione unde odio eveniet incidunt debitis tenetur, adipisci quibusdam similique doloribus non soluta rerum eius sed! Quod, tempore laborum.</li>
              <li>Tecnologia 1</li>
              <li>Tecnologia 2</li>
              <li>Tecnologia 3</li>
            </ul>
          </td>
        </tr>
      </table>
    </section>
)
}

export default SectionRight;
