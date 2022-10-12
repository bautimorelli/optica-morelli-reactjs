import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { React, useState } from "react"
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const pages = [
	{ link: "/category/lentesDeSol", name: "Lentes De Sol" },
	{ link: "/category/lentesRecetados", name: "Lentes Recetados" },
	{ link: "/category/contactologia", name: "Contactologia" },
]

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar
					disableGutters
					className="justify--content--center">
					{/* Not collapsed Logo */}
					<Box
						sx={{
							display: { xs: "none", md: "flex" },
						}}>
						<NavLink
							to="/"
							style={{ textDecoration: "none" }}>
							<Box
								component="img"
								sx={{
									height: 70,
									display: { xs: "none", md: "flex" },
								}}
								alt="Optica Morelli logo"
								src="/images/logoOpticaTransparent.png"
								title="Optica Morelli"
							/>
						</NavLink>
					</Box>

					{/* Collapsed Menu */}
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{pages.map((page) => (
								<MenuItem
									key={page.name}
									onClick={handleCloseNavMenu}>
									<NavLink
										to={page.link}
										style={{
											textDecoration: "none",
											color: "black",
										}}>
										<Typography textAlign="center">
											{page.name}
										</Typography>
									</NavLink>
								</MenuItem>
							))}
						</Menu>
					</Box>

					{/* Collapsed Logo */}
					<Box
						sx={{
							display: { xs: "flex", md: "none" },
						}}>
						<NavLink
							to="/"
							style={{ textDecoration: "none" }}>
							<Box
								component="img"
								sx={{
									height: 70,
									display: { xs: "flex", md: "none" },
									mr: 1,
								}}
								alt="Optica Morelli logo"
								src="/images/logoOpticaTransparent.png"
								title="Optica Morelli"
							/>
						</NavLink>
					</Box>

					{/* Not Collapsed Menu */}
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<NavLink
								to={page.link}
								key={page.name}
								style={{
									textDecoration: "none",
									color: "black",
								}}>
								<Button
									key={page.name}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										mx: 1,
										color: "black",
										display: "block",
									}}>
									{page.name}
								</Button>
							</NavLink>
						))}
					</Box>
					<CartWidget />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default ResponsiveAppBar
