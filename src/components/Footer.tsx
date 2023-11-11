export const Footer = () => {
  return (
    <div className="bg-gray-100 mt-16 py-10">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-2 md:px-0">
        <li className="mb-6 lg:mb-0">
          <h3 className="text-lg font-medium mb-2">Shopping</h3>
          <ul className="font-light">
            <li>
              <a href="#">Delivery time and cost</a>
            </li>
            <li>
              <a href="#">Payment methods</a>
            </li>
          </ul>
        </li>
        <li className="mb-6 lg:mb-0">
          <h3 className="text-lg font-medium mb-2">Help</h3>
          <ul className="font-light">
            <li>
              <a href="#">Statute</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Exchange / Complaint / Return</a>
            </li>
          </ul>
        </li>
        <li className="mb-6 lg:mb-0">
          <h3 className="text-lg font-medium mb-2">Information</h3>
          <ul className="font-light">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Work at StyleHub</a>
            </li>
            <li>
              <a href="#">Lookbook</a>
            </li>
          </ul>
        </li>
        <li className="mb-6 lg:mb-0">
          <h3 className="text-lg font-medium mb-2">BOK StyleHub</h3>
          <ul className="font-light">
            <li>
              <a href="tel:222299112">tel. 22 229 91 12</a>
            </li>
            <li>
              <a href="mailto:orders@stylehub.com">orders@stylehub.com</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
