import React from 'react'
import { ShoppingCartIcon, ShoppingBagIcon, LogOutIcon } from "lucide-react"
import { Link, useResolvedPath, useNavigate } from "react-router-dom"
import ThemeSelector from './ThemeSelector'
import { useProductStore } from "../store/useProductStore"
import { useAuthStore } from "../store/useAuthStore"

function NavBar() {
  const { pathname } = useResolvedPath()
  const isHomePage = pathname === '/'
  const { products } = useProductStore()
  const { logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* Logo */}
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="size-9 text-primary" />
                <span className="font-semibold font-mono tracking-widest text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  EZSeller
                </span>
              </div>
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <ThemeSelector />

            {isHomePage && (
              <div className="indicator">
                <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
                  <ShoppingBagIcon className="size-5" />
                  <span className="badge badge-sm badge-primary indicator-item">
                    {products.length}
                  </span>
                </div>
              </div>
            )}

            {/* Logout Button */}
            <button onClick={handleLogout} className="btn btn-sm btn-outline btn-error ml-2">
              <LogOutIcon className="size-4 mr-1" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
